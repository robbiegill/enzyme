import ReactWrapper from './ReactWrapper';
import { registerWrapper } from './registry';

/**
 * Mounts and renders a react component into the document and provides a testing wrapper around it.
 *
 * @param node
 * @returns {ReactWrapper}
 */
export default function mount(node, options) {
  const wrapper = new ReactWrapper(node, null, options);
  registerWrapper(wrapper);
  return wrapper;
}
