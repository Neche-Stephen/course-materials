import { jsTopicsComponentsObject } from "./topicsComponentsObject";
import { cssTopicsComponentsObject } from "./topicsComponentsObject";
import { htmlTopicsComponentsObject } from "./topicsComponentsObject";

export const showJsTopicMethod = (topicName) => {
    const selectedTopicComponent = jsTopicsComponentsObject[topicName];
    if (selectedTopicComponent) {
        return selectedTopicComponent;
    }
  };

export const showCssTopicMethod = (topicName) => {
  const selectedTopicComponent = cssTopicsComponentsObject[topicName];
  if (selectedTopicComponent) {
      return selectedTopicComponent;
  }
};

export const showHtmlTopicMethod = (topicName) => {
  const selectedTopicComponent = htmlTopicsComponentsObject[topicName];
  if (selectedTopicComponent) {
      return selectedTopicComponent;
  }
};