
const Course = require('../models/Course');

// GET all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET course by ID
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findOne({ id: req.params.id });

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST create course
const createCourse = async (req, res) => {
  try {
    const { course_name, platform } = req.body;

    if (!course_name || !platform) {
      return res.status(400).json({
        message: 'Course name and platform are required'
      });
    }

    const newCourse = new Course(req.body);
    await newCourse.save();

    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT update course
const updateCourse = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: 'Update data is required' });
    }

    const updatedCourse = await Course.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE course
const deleteCourse = async (req, res) => {
  try {

    if (isNaN(req.params.id)) {
  return res.status(400).json({ message: 'Invalid course ID' });
}

    const deletedCourse = await Course.findOneAndDelete({
      id: req.params.id
    });

    if (!deletedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
};
