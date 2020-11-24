import { messages } from "../../lang/messages";
import axios from "axios";

export const namespaced = true;

export const state = {
  translatedMessages: {},
};

export const actions = {
  translateMessages({ state }, { q, target }) {
    console.log(q, target);
    const instance = axios.create({
      baseURL: "https://translation.googleapis.com/language/translate/v2",
    });

    return instance
      .get(
        `?q=${JSON.stringify(
          messages.join("--")
        )}&target=${target}&key=AIzaSyC48te9ARFNQT8cenOxb5Wd7JCy2RR95nw`
      )
      .then((response) => {
        // const data = response.data.data;
        let translatedText = response.data.data.translations[0].translatedText;
        translatedText.replace(/&quot;/g, '"');
        const messagesArray = translatedText.split(" - ");

        for (let i = 0; i < messagesArray.length; i++) {
          let message = messagesArray[i];

          state.translatedMessages[messages[i]] = message;
        }

        return state.translatedMessages;
      })
      .catch(() => {
        for (let i = 0; i < messages.length; i++) {
          let message = messages[i];

          state.translatedMessages[message] = message;
        }
      });
  },
};
