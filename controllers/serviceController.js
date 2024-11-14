const Service = require('../models/serviceModel');

// Adding a New Services
exports.addService = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const newService = new Service({ name, description, price });
    await newService.save();
    res.status(201).json({
      message: "Service added successfully",
      service: newService
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Fetching al services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json({
      message: "All services fetched successfully",
      services: services
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update services
exports.updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedService = await Service.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({
      message: "Service updated successfully",
      service: updatedService
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete  service
exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedService = await Service.findByIdAndDelete(id);
    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({
      message: 'Service deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
