import h from 'hyperscript';
import hh from 'hyperscript-helpers';

const { div, button } = hh(h);

// model = data

const initModel = 0;

function view(dispatching, model) {
  return div([
    // counter: data
    div({ className: 'mv2' }, `counter: ${model}`),
    button(
      {
        className: 'pv1 ph2 mr2',
        onclick: () => dispatching(MSGS.ADD),
      },
      '+',
    ),
    button(
      { className: 'pv1 ph2', onclick: () => dispatching(MSGS.SUBSTRACT) },
      '-',
    ),
  ]);
}

function updateModel(msg, model) {
  switch (msg) {
    case MSGS.ADD:
      return model + 1;
    case MSGS.SUBSTRACT:
      return model - 1;
    default:
      return model;
  }
}

const MSGS = {
  ADD: 'ADD',
  SUBSTRACT: 'SUBSTRACT',
};

function app(initModel, node) {
  let theModel = initModel; // put attention here
  let currentView = view(dispatch, theModel);
  node.appendChild(currentView);

  function dispatch(msg) {
    theModel = updateModel(msg, theModel); // put attention here
    const updatedView = view(dispatch, theModel);
    node.replaceChild(updatedView, currentView);
    currentView = updatedView;
  }
}

const rootNode = document.getElementById('app');

app(initModel, rootNode);
