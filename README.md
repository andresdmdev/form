<center><img src="/img/survey.png" alt="Survey" width="100px" heigth="100px" /></center>

# Form - React.js

### Resume

This app shows a form with 8 input fields(4 required).It evauates each required input field,if all are correct it shows a green border in other cases are red,with a corresponding issue message.Finally,it shows an small card with a greeting and a button to show the data submitted in a big card.I used arrow functions, ternary operators,RegExp ,validations and render props to share and validate value props between components.

### Stack used for this project

| Languages  | Libraries |
| ------------------------------ | ------------------------------ |
| <img src="/img/javascript.png" alt="JavaScript" width="70px" heigth="70px" />  | <img src="/img/react.png" alt="React" width="70px" heigth="70px" />  |
| <img src="/img/html.png" alt="Html5" width="70px" heigth="70px" />  | <img src="/img/redux.png" alt="Redux" width="70px" heigth="70px" />  |
| <img src="/img/css.png" alt="Css" width="70px" heigth="70px" />  | <img src="/img/sass.png" alt="Sass" width="70px" heigth="70px" />  |


### Flow chart

```flow
st=>start: Login
op=>operation: Login operation
cond=>condition: Successful Yes or No?
e=>end: User data

st->op->cond
cond(yes)->e
cond(no)->op
```