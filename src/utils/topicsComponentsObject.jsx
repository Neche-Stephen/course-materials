// JS Topics
import IntroToProg from "../component/jsTopics/IntroToProg/IntroToProg";
import IntroToJs from "../component/jsTopics/IntroToJs/IntroToJs";
import DataTypes from "../component/jsTopics/DataTypes/DataTypes";

// CSS Topics
import IntroCss from "../component/css-topics/IntroCss/Intro-css";
import StylingText from "../component/css-topics/StylingText/stylingText";

//HTML Topics
import IntroToHtml from "../component/html-topics/IntroToHtml/IntroToHtml";
import IntroToAttributes from "../component/html-topics/IntroToAttributes/IntroToAttributes";

//JS Topics Object
export const jsTopicsComponentsObject = {
    'Introduction to Programming': <IntroToProg />,
    'Introduction to Javascript': <IntroToJs />,
    'Introduction to Javascript Data types':< DataTypes />,
  };

//CSS Topics Object
export const cssTopicsComponentsObject = {
  'Introduction to CSS': <IntroCss />,
  'Styling Text': <StylingText />
};

// HTML Topics Object
export const htmlTopicsComponentsObject = {
  "Introdution To HTML": <IntroToHtml />,
  'Introdution To Attributes': <IntroToAttributes />
};