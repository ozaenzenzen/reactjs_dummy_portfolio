import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles = {
  "/": "Home - Fauzan's Lab",
  "/about": "About Me - Fauzan's Lab",
  "/project": "Project - Fauzan's Lab",
  "/experience": "Experience - Fauzan's Lab",
  "/contact": "Contact - Fauzan's Lab"
};

export default function DynamicTitle() {
  const navigation = useLocation();

  // useEffect(() => {
  //   document.title = titles[location.pathname] || "Fauzan's Lab";
  // }, [location]);

  useEffect(() => {
    if (navigation.location) {
      document.title = titles[navigation.location.pathname] || "MyApp";
    }
  }, [navigation.location]);

  return null; // This component only updates the title
}