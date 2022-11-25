import h from 'hyperscript';
import hh from 'hyperscript-helpers';

const { div, button } = hh(h);

// model = data

const initModel = 0;

function view(model) {
  return div([
    // counter: data
    div({ className: 'mv2' }, `counter: ${model}`),
    button(
      {
        className: 'pv1 ph2 mr2',
        onclick: () => console.log('plus'),
      },
      '+',
    ),
    button({ className: 'pv1 ph2', onclick: () => console.log('minus') }, '-'),
  ]);
}

function updateModel(msg, model) {
  switch (msg) {
    case 'plus':
      return model + 1;
    case 'minus':
      return model - 1;
    default:
      return model;
  }
}

const rootNode = document.getElementById('app');

rootNode.appendChild(view(updateModel('plus', initModel)));
