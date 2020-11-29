'use strict';

import 'es6-promise';
import '@babel/polyfill';
import 'fetch-polyfill';
import 'formdata-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);


import toggleMenu from './modules/toggleMenu';
import sendForms from './modules/sendForms';
import formsValid from './modules/formsValid';
import tabs from './modules/tabs';
import calcTabs from './modules/calcTabs';
import btnMore from './modules/btnMore';


//модальное окно (1)
toggleMenu();
//отправка форм (2)
sendForms();
//валидация форм (2)
formsValid();
//аккардеон (3)
tabs();
//аккардеон калькулятор
calcTabs();
//кнопка "Больше"
btnMore();