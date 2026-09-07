import { useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "../components/UI/SearchBar";
import RecipeFilter from "../components/Recipe/RecipeFilter";
import RecipeList from "../components/Recipe/RecipeList";
import Loading from "../components/UI/Loading";
import { filterRecipes, sortRecipes } from "../utils/helpers";
import styles from "./Pages.module.css";