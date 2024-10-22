import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  forgotPassword,
  getCurrentUser,
  updateUserDetails,
  updateUserAvatar,
  updateUserCoverImage,
  getUserChannelDetails,
  getWatchHistory,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

// Secured Routes
router.route("/logout").post(verifyJwt, logoutUser);
router.route("/refreshToken").post(refreshAccessToken);
router.route("/forgotPassword").post(verifyJwt, forgotPassword);
router.route("/getCurrentUser").get(verifyJwt, getCurrentUser);
router.route("/updateUserDetails").patch(verifyJwt, updateUserDetails);
router
  .route("/updateUserAvatar")
  .patch(verifyJwt, upload.single("avatar"), updateUserAvatar);
router
  .route("/updateUserCoverImage")
  .patch(verifyJwt, upload.single("coverImage"), updateUserCoverImage);
router.route("/c/:username").get(verifyJwt, getUserChannelDetails);
router.route("/getWatchHistory").get(verifyJwt, getWatchHistory);

export default router;
