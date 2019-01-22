/*eslint-disable */

const dir = __dirname;
const fs = require('fs');

const jsonServer = require('json-server');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Set delay before answer
server.use((req, res, next) => {
  setTimeout(next, 0);
});


// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Add custom routes before JSON Server router
server.post('/api', (req, res) => {
  console.log('req.body: ', req.body);
  const { vueFormer: { direction } } = req.body;
  if (direction) {
    res.jsonp({
      form: {
        title: 'From API',
        description: 'Description for first section from API',
        fields: {
          select1: {
            type: 'VfSelect',
            title: 'Выберите из списка',
            options: [
              { value: '', label: '' },
              { value: 0, label: 'Email' },
              { value: 1, label: 'Phone' },
            ],
            value: '0',
            rules: {
              required: true,
            },
          },
          email: {
            type: 'VfInput',
            title: 'Email:',
            placeholder: 'Введите ваш email',
            rules: {
              type: 'email',
              required: true,
            },
            bind: {
              to: 'select',
              conditional: '0',
              initial: {
                show: false,
              },
              done: {
                show: true,
              },
            },
          },
          phone: {
            type: 'VfInput',
            title: 'Phone:',
            placeholder: 'Введите ваш номер телефона',
            rules: {
              required: true,
            },
            bind: {
              to: 'select1',
              conditional: ['1', ''],
              initial: {
                disabled: true,
              },
              done: {
                disabled: false,
              },
            },
          },
          groupedInputs: {
            type: 'VfGrid',
            title: 'Информация',
            rows: [
              {//row 1
                name: {//column 1
                  type: 'VfInput',
                  title: 'Имя',
                },
                lastName: {//column 2
                  type: 'VfInput',
                  title: 'Фамилия',
                  col: 2,
                },
                middleName: {//column 2
                  type: 'VfInput',
                  title: 'Отчество',
                  col: 2,
                },
              },
              {//row 2
                name: {//column 1
                  type: 'VfInput',
                  title: 'Страна',
                },
                secondName: {//column 2
                  type: 'VfInput',
                  title: 'Город',
                },
              },
            ],
          },
        },
      },
      panel: {
        prev: true,
        next: false,
        submit: true,
      },
    });
  } else {
    res.jsonp({
      form: {
        title: 'Section one',
        description: 'Description for first section',
        fields: {
          select2: {
            type: 'VfSelect',
            title: 'Выберите из списка',
            options: [
              { value: '', label: '' },
              { value: 0, label: 'Email' },
              { value: 1, label: 'Phone' },
            ],
            value: '0',
            rules: {
              required: true,
            },
          },
          email: {
            type: 'VfInput',
            title: 'Email:',
            placeholder: 'Введите ваш email',
            value: 'user@example.com',
            rules: {
              type: 'email',
              required: true,
            },
            bind: {
              to: 'select',
              conditional: '0',
              initial: {
                show: false,
              },
              done: {
                show: true,
              },
            },
          },
          phone: {
            type: 'VfInput',
            title: 'Phone:',
            placeholder: 'Введите ваш номер телефона',
            rules: {
              required: true,
            },
            bind: {
              to: 'select2',
              conditional: ['1', ''],
              initial: {
                disabled: true,
              },
              done: {
                disabled: false,
              },
            },
          },
          file: {
            type: 'VfInputFile',
            title: 'Загрузка копии свидетельства о заключении брака',
            btnText: 'Добавить изображение',
            errorSize: 'Слишком большой размер загружаемого файла',
            errorType: 'Неверный тип загружаемого файла',
            restriction: 'Файл в формате PDF, DOC, DOCX, PNG, JPEG, не больше 20 Мб.',
            fileTypes: ['pdf', 'doc', 'docx', 'png', 'jpeg'],
            maxFileSize: 20971520,
            rules: {
              required: false,
            },
          },
          textarea: {
            type: 'VfTextarea',
            title: 'Text:',
            placeholder: 'Введите много текста',
            rules: {
              required: false,
            },
          },
          groupedInputs: {
            type: 'VfGrid',
            title: 'Информация',
            rows: [
              {//row 1
                name: {//column 1
                  type: 'VfInput',
                  title: 'Имя',
                },
                lastName: {//column 2
                  type: 'VfInput',
                  title: 'Фамилия',
                  col: 2,
                },
                middleName: {//column 2
                  type: 'VfInput',
                  title: 'Отчество',
                  col: 2,
                },
              },
              {//row 2
                name: {//column 1
                  type: 'VfInput',
                  title: 'Страна',
                },
                secondName: {//column 2
                  type: 'VfInput',
                  title: 'Город',
                },
              },
            ],
          },
        },
      },
      panel: {
        prev: false,
        next: true,
        submit: false,
      },
    });
  }

});

server.listen(3003, () => {
  console.log('JSON Server is running: http://localhost:3003/');
});
