export const INCREMENT = 'INCREMENT';
export const DECREASE = 'DECREASE';

export function increment(id) {
  return {
    type: INCREMENT,
    id
  }
}

export function decrease(id) {
  return {
    type: DECREASE,
    id
  }
}
