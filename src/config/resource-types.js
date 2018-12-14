import { pages } from "@/config/pages";

export const Course = {
  type: 1,
  pages: pages.Course,
  api: require("@/api/course").default
};

export default {
  Course
};
