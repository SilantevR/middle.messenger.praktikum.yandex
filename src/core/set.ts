function merge(lhs: Record<string, any>, rhs: Record<string, any>): Record<string, unknown> {
  for (const p in rhs) {
    if (!Object.prototype.hasOwnProperty.call(rhs, p)) { continue; }

    try {
      if (rhs[p].constructor === Object) {
        rhs[p] = merge(lhs[p] as Record<string, unknown>, rhs[p] as Record<string, unknown>);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }

  return lhs;
}

function set(
  object: Record<string, unknown> | unknown,
  path: string,
  value: unknown,
): Record<string, unknown> | unknown {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  const result = path.split('.').reduceRight((acc, key) => ({
    [key]: acc,
  }), value as any);
  return merge(object as Record<string, unknown>, result);
}

export default set;
