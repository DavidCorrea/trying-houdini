registerLayout('sample-layout', class {
    // Properties to look for on calling element
    static get inputProperties() {
      return ['--gap'];
    }
    
    // Properties to look for on direct child elements
    static get childrenInputProperties() { return ['--bar']; }

    // Options for the Layout
    // `childDisplay` can be 'block' or 'normal'. 'block' is similar to children of flex and grid containers, 'normal'. Otherwise boxes won't be blockified
    // `sizing` can be 'block-like' or 'manual'. 'block-like' will make the Layout Constraints's inline size be fixed, and block size be calculated like border-box. Otherwise, it's just the calculated inlineSize and blockSize
    static get layoutOptions() {
      return {
        childDisplay: 'inline',
        sizing: null
      };
    }
  
    // Generator functions instead of normal functions to support async/parallel layout engines
    // Determines how a box fits its content or fits in to our layout context
    *intrinsicSizes(children, edges, styleMap) {
      // children - Child elements of box being laid out
      // edges - Layout Edges of the box being
      // styleMap - Typed OM style map of box being laid out
  
      const childrenSizes = children.map((child) => {
        return child.intrinsicSizes();
      });
  
      const maxContentSize = childrenSizes.reduce((max, childSizes) => {
        return Math.max(max, childSizes.maxContentSize);
      }, 0);
  
      const minContentSize = childrenSizes.reduce((max, childSizes) => {
        return Math.max(max, childSizes.minContentSize);
      }, 0);
  
      return {maxContentSize, minContentSize};
    }
  
    *layout(children, edges, constraints, styleMap, breakToken) {
      // children - Child elements of Parent Layout
      // edges - `LayoutEdges` of Parent Layout
      // constraints - `Layout Constraints` of Parent Layout
      // styleMap - Typed OM style map of Parent Layout
      // breakToken - Token (if paginating for printing for example) to resume layout at
  
      // Layout code goes here.
      const availableInlineSize = constraints.fixedInlineSize;
      const availableBlockSize = constraints.fixedBlockSize;
      const childConstraints = { availableInlineSize, availableBlockSize };

      const childFragments = yield children.map((child) => {
        return child.layoutNextFragment(childConstraints);
      });

      let blockOffset = 20;
      for (let fragment of childFragments) {
        fragment.blockOffset = blockOffset;
        fragment.inlineOffset = 20;

        blockOffset += fragment.blockSize + 15;
      }

      return {
        blockOffset,
        childFragments,
      };
    }
  });


  /*
  margin: 30px 20px;
  padding: 0 10px;
  */