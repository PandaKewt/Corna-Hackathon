import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'add' : ActorMethod<[bigint, bigint], bigint>,
  'clear_counter' : ActorMethod<[], bigint>,
  'days_to_second' : ActorMethod<[bigint], bigint>,
  'divide' : ActorMethod<[bigint, bigint], boolean>,
  'increment_counter' : ActorMethod<[], bigint>,
  'maximum' : ActorMethod<[Array<bigint>], bigint>,
  'remove_from_array' : ActorMethod<[Array<bigint>, bigint], Array<bigint>>,
  'selection_sort' : ActorMethod<[Array<bigint>], Array<bigint>>,
  'square' : ActorMethod<[bigint, bigint], bigint>,
  'sum_of_array' : ActorMethod<[Array<bigint>], bigint>,
}
