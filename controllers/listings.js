const Listing = require("../models/listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.searchListings = async (req, res) => {
  let dest = req.body.destination;
  let searchedListings = await Listing.find({
    $or: [
      { location: { $regex: new RegExp(dest, 'i') } }, // 'i' flag for case-insensitive
      { country: { $regex: new RegExp(dest, 'i') } }
    ],
  });
  if (searchedListings.length === 0) {
    let err = {
      message: "No such listings exist.",
    };
    res.render("error.ejs", { err });
  } else {
    res.render("listings/searchedListings", { searchedListings });
  }
};

module.exports.filterListings = async (req, res) => {
  let filter = req.params.filter;
  
  let filteredListings = await Listing.find({
    filters: {
      $elemMatch: {
        $eq: filter,
      },
    },
  });
  
  res.render("listings/filteredListings", {filteredListings, filter})
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for doesn't exist");
    return res.redirect("/listings");
  }
  res.render("./listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location + `, ${req.body.listing.country}`,
      limit: 1,
    })
    .send();

  // let {title, description, image, price, country, location} = req.body;
  let url = req.file.path;
  let filename = req.file.filename;

  let newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  newListing.geometry = response.body.features[0].geometry;
  let savedListing = await newListing.save();
  req.flash("success", "New Listing Created");
  console.log(req.body.listing);
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for doesn't exist");
    return res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let updatedListing = req.body.listing;

  let response = await geocodingClient
    .forwardGeocode({
      query: updatedListing.location + `, ${updatedListing.country}`,
      limit: 1,
    })
    .send();

  updatedListing.geometry = response.body.features[0].geometry;

  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file != "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing Updated");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
