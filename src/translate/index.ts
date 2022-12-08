import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)


const resources = {
  en: {
    translation: {
      'any_question': 'For any questions and to place an order, please contact us by phone, mail and social networks.',
      'only_natural':'Only natural ingredients, safe for the whole family.',
      'h1': "Candles handmade Tbilisi Georgia",
      'we_create': 'We create not just candles, we create mood!',
      'all_candles': 'All candles presented in our store do not contain paraffin, lead, benzene and other unsafe substances.'
    }
  },
  ru: {
    translation: {
      'any_question': 'По любым вопросам и для заказа свяжитесь с нами по телефону, почте и в соцсетях.',
      'only_natural':'Только натуральные ингредиенты, безопасные для всей семьи.',
      'h1': "Свечи ручной работы Тбилиси Грузия",
      'we_create': 'Мы создаем не просто свечи, мы создаем настроение!',
      'all_candles': 'Все свечи, представленные в нашем магазине, не содержат парафин, свинец, бензол  и иных небезопасных веществ.'
    }
  },
  ge: {
    translation: {
      'any_question': 'ნებისმიერი კითხვისთვის და შეკვეთისთვის გთხოვთ დაგვიკავშირდეთ ტელეფონით, ფოსტით და სოციალური ქსელებით.',
      'only_natural':'მხოლოდ ბუნებრივი ინგრედიენტები, უსაფრთხო მთელი ოჯახისთვის.',
      'h1': "ხელნაკეთი სანთლები თბილისი საქართველო",
      'we_create': 'ჩვენ ვქმნით არა მხოლოდ სანთლებს, ჩვენ ვქმნით განწყობას!',
      'all_candles':'ჩვენს მაღაზიაში წარმოდგენილი ყველა სანთელი არ შეიცავს პარაფინს, ტყვიას, ბენზოლს და სხვა სახიფათო ნივთიერებებს.'
    }
  }
};



i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ru", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;