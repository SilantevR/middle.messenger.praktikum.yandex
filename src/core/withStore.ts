import Block from './block';
import store, { StoreEvents } from './store';
// eslint-disable-next-line no-unused-vars
export default function withStore(mapStateToProps: (state: typeof Block) => any) {
  return function wrap(Component: any) {
    let previousState: any;

    return class WithStore extends Component {
      constructor(props: any) {
        previousState = mapStateToProps(store.getState());

        super({ ...props, ...previousState });

        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(store.getState());

          previousState = stateProps;

          this.setProps({ ...stateProps });
        });
      }
    };
  };
}
