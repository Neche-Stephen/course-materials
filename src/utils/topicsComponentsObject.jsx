// JS Topics
import IntroToProg from "../component/jsTopics/IntroToProg/IntroToProg";
import IntroToJs from "../component/jsTopics/IntroToJs/IntroToJs";
import DataTypes from "../component/jsTopics/DataTypes/DataTypes";
import JsOperators from "../component/jsTopics/jsOperators/JsOperators";
import CondStatements from "../component/jsTopics/conditionalStatements/CondStatements";
import Loops from "../component/jsTopics/loops/Loops";
import Functions from "../component/jsTopics/jsFunctions/JsFunctions";
import DataTypesMethods from "../component/jsTopics/DataTypesMethod/DataTypesMethod";
import JsIteration1 from "../component/jsTopics/jsIteration/JsIteration";
import JsIteration2 from "../component/jsTopics/jsIteration2/JsIteration2";
import JsDOM1 from "../component/jsTopics/DOM/DOM1";
import JsDOM2 from "../component/jsTopics/DOM/DOMSecond";

// CSS Topics
import IntroCss from "../component/css-topics/IntroCss/Intro-css";
import StylingText from "../component/css-topics/StylingText/stylingText"; 

//HTML Topics
import IntroHTML from "../component/html-topics/IntroHTML/IntroHTML";
import HtmlElements from "../component/html-topics/HtmlElements/HtmlElements";
import Table_Form from "../component/html-topics/Table_Form/Table_Form";

//Extra Topics
import Git_Github from "../component/extraTopics/git_github/Git_Github";

//JS Topics Object
export const jsTopicsComponentsObject = {
    'Intro to Programming': <IntroToProg />,
    'Intro to Javascript': <IntroToJs />,
    'Intro to JS Data types':< DataTypes />,
    'JS Operators' : <JsOperators />,
    'Conditional Statements' : <CondStatements />,
    'JS Loops' : <Loops />,
    'JS Functions': <Functions />,
    'Data Type Methods' : <DataTypesMethods />,
    'JS Iteration 1' : <JsIteration1 />,
    'JS Iteration 2' : <JsIteration2 />,
    'JS DOM 1' : <JsDOM1 />,
    'JS DOM 2' : <JsDOM2 />
  };

//CSS Topics Object
export const cssTopicsComponentsObject = {
  'Intro to CSS': <IntroCss />,
  'Styling Text': <StylingText />
};

// HTML Topics Object
export const htmlTopicsComponentsObject = {
  "Intro To HTML": <IntroHTML />,
  'HTML Elements': <HtmlElements />,
  "Tables/Forms" : <Table_Form />
};

// Extras Topics Object
export  const extraTopicsComponentsObject =  {
    "Git/Github" : <Git_Github />
}