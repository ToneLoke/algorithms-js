const isRoute = require('../../../lib/algorithms/4-binaryTrees/isRoute');

describe('When testing a directed graph, determine if there is a route', () => {
  let graph,
    a,
    b,
    c,
    d,
    e,
    f;

  beforeEach(() => {
    graph = { children: [] };
    a = { data: 'a', children: [] };
    b = { data: 'b', children: [] };
    c = { data: 'c', children: [] };
    d = { data: 'd', children: [] };
    e = { data: 'e', children: [] };
    f = { data: 'f', children: [] };
    g = { data: 'g', children: [] };

    // add children to graph
    graph.children.push(a);
    graph.children.push(b);
    graph.children.push(c);
    graph.children.push(d);
    graph.children.push(e);
    graph.children.push(f);
    graph.children.push(g);

    // directed graph with one loop - c->e->d, and no path between a & g
    a.children.push(b);
    a.children.push(c);
    b.children.push(c);
    c.children.push(e);
    d.children.push(c);
    e.children.push(d);
    e.children.push(f);
    g.children.push(d);
  });

  it('A route can be found from a to f', () => {
    expect(isRoute(graph, a, f)).toBe(true);
  });

  it('A route can be found from g to f', () => {
    expect(isRoute(graph, g, f)).toBe(true);
  });

  it('No route exists between a and g', () => {
    expect(isRoute(graph, a, g)).toBe(false);
  });
});
