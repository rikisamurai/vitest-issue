import { expect, expectTypeOf, test } from 'vitest'

test('type', () => {
    expectTypeOf(1).toEqualTypeOf('2')
    expectTypeOf({ a: 11 }).toEqualTypeOf<{ a: string }>();
    expect(1).toBe(2) // not executed
})