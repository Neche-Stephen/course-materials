// JS Topics
import IntroToProg from "../component/jsTopics/IntroToProg/IntroToProg";
import IntroToJs from "../component/jsTopics/IntroToJs/IntroToJs";
import DataTypes from "../component/jsTopics/DataTypes/DataTypes";
import JsOperators from "../component/jsTopics/jsOperators/JsOperators";
import CondStatements from "../component/jsTopics/conditionalStatements/CondStatements";
import Loops from "../component/jsTopics/loops/Loops";
import Functions from "../component/jsTopics/jsFunctions/JsFunctions";
import DataTypesMethods from "../component/jsTopics/DataTypesMethod/DataTypesMethod";

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
    'Conditional Statements' : <CondStatements />,
    'JS Loops' : <Loops />,
    'JS Functions': <Functions />,
    'Data Type Methods' : <DataTypesMethods />
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