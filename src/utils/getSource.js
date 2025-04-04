import { capitalize } from './capitalize';

export function getSource() {
  let source = localStorage.getItem('traffic_source');
  return capitalize(source);
}
