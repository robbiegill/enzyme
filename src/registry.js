import { findDOMNode, unmountComponentAtNode } from './react-compat';

let registry = [];

/**
 * Unmount any registered wrapper components
 *
 */
function tearDown() {
  registry.forEach((wrapper) => {
    const component = wrapper.instance();
    if (component.isMounted()) {
      const node = findDOMNode(component);
      if (node && node.parentNode) {
        unmountComponentAtNode(node.parentNode);
      }
    }
  });

  registry = [];
}

/**
 * Registers a react wrapper to be unmounted later
 *
 * @param wrapper
 */
function registerWrapper(wrapper) {
  registry.push(wrapper);
}

export {
  tearDown,
  registerWrapper,
};
