// JS Topics
import IntroToProg from "../component/jsTopics/IntroToProg/IntroToProg";
import IntroToJs from "../component/jsTopics/IntroToJs/IntroToJs";
import DataTypes from "../component/jsTopics/DataTypes/DataTypes";
import JsOperators from "../component/jsTopics/jsOperators/JsOperators";
import CondStatements from "../component/jsTopics/conditionalStatements/CondStatements";

// CSS Topics
import IntroCss from "../component/css-topics/IntroCss/Intro-css";
import StylingText from "../component/css-topics/StylingText/stylingText";

//HTML Topics
import IntroToHtml from "../component/html-topics/IntroToHtml/IntroToHtml";
import IntroToAttributes from "../component/html-topics/IntroToAttributes/IntroToAttributes";

//JS Topics Object
export const jsTopicsComponentsObject = {
    'Intro to Programming': <IntroToProg />,
    'Intro to Javascript': <IntroToJs />,
    'Intro to JS Data types':< DataTypes />,
    'JS Operators' : <JsOperators />,
    'Conditional Statements' : <CondStatements />
  };

//CSS Topics Object
export const cssTopicsComponentsObject = {
  'Intro to CSS': <IntroCss />,
  'Styling Text': <StylingText />
};

// HTML Topics Object
export const htmlTopicsComponentsObject = {
  "Intro To HTML": <IntroToHtml />,
  'Intro To Attributes': <IntroToAttributes />
};