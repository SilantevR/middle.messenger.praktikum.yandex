import { expect } from 'chai';
import sinon from 'sinon';
import { EventBus } from './event_bus';

describe('EventBus тестирование', () => {
  const eventBus = new EventBus();
  const spy = sinon.spy();
  eventBus.on('test', spy);
  it('EventBus тест EMITEVENT', () => {
    eventBus.emit('test');
    expect(spy.calledOnce).to.equal(true);
    eventBus.off('test', spy);
    eventBus.emit('test');
    expect(spy.calledTwice).to.equal(false);
  });
  it('EventBus тест EMITEERROR', () => {
    try {
      eventBus.emit('test2');
    } catch (err) {
      expect(err.message).to.equal('Нет события: test2');
    }
  });
  it('EventBus тест OFFERROR', () => {
    try {
      eventBus.off('test2', spy);
    } catch (err) {
      expect(err.message).to.equal('Нет события: test2');
    }
  });
});
