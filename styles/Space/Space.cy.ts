import { generateSpaceList, generateSpaceListBaseOnCommonInterface } from './Space';

const testingMemberKey = (result: Array<string>, key: string) => result.some((member) => member.includes(key));

describe('styles/Space/Space.cy.ts', () => {
  describe('unit test on generateSpaceList', () => {
    describe('With a single size', () => {
      it('should return style begin with "Space_space_height_1__", when size is 1 and type is "height"', () => {
        const result = generateSpaceList({ size: 1, type: 'height' });
        expect(testingMemberKey(result, 'Space_space_height_1__')).to.be.eq(true);
      });
      it('should return style begin with "Space_space_width_2__", when size is 2 and type is "width"', () => {
        const result = generateSpaceList({ size: 2, type: 'width' });
        expect(testingMemberKey(result, 'Space_space_width_2__')).to.be.eq(true);
      });
      it('should return style begin with "Space_space_padding_3__", when size is 3 and type is "padding"', () => {
        const result = generateSpaceList({ size: 3, type: 'padding' });
        expect(result.some((member) => member.includes('Space_space_padding_3__'))).to.be.eq(true);
      });
      it('should return style begin with "Space_space_paddingTop_4__", when size is 4 and type is "paddingTop"', () => {
        const result = generateSpaceList({ size: 4, type: 'paddingTop' });
        expect(result.some((member) => member.includes('Space_space_paddingTop_4__'))).to.be.eq(true);
      });
      it('should return style begin with "Space_space_paddingBottom_5__", when size is 5 and type is "paddingBottom"', () => {
        const result = generateSpaceList({ size: 5, type: 'paddingBottom' });
        expect(result.some((member) => member.includes('Space_space_paddingBottom_5__'))).to.be.eq(true);
      });
      it('should return style begin with "Space_space_paddingLeft_6__", when size is 6 and type is "paddingLeft"', () => {
        const result = generateSpaceList({ size: 6, type: 'paddingLeft' });
        expect(result.some((member) => member.includes('Space_space_paddingLeft_6__'))).to.be.eq(true);
      });
      it('should return style begin with "Space_space_paddingRight_8__", when size is 8 and type is "paddingRight"', () => {
        const result = generateSpaceList({ size: 8, type: 'paddingRight' });
        expect(result.some((member) => member.includes('Space_space_paddingRight_8__'))).to.be.eq(true);
      });
      it('should return style begin with "Space_space_paddingInline_10__", when size is 10 and type is "paddingInline"', () => {
        const result = generateSpaceList({ size: 10, type: 'paddingInline' });
        expect(result.some((member) => member.includes('Space_space_paddingInline_10__'))).to.be.eq(true);
      });
      it('should return style begin with "Space_space_paddingBlock_12__", when size is 12 and type is "paddingBlock"', () => {
        const result = generateSpaceList({ size: 12, type: 'paddingBlock' });
        expect(result.some((member) => member.includes('Space_space_paddingBlock_12__'))).to.be.eq(true);
      });
      it('should return style begin with "Space_space_margin_15__", when size is 15 and type is "margin"', () => {
        const result = generateSpaceList({ size: 15, type: 'margin' });
        expect(result.some((member) => member.includes('Space_space_margin_15__'))).to.be.eq(true);
      });
      it('should return style begin with "Space_space_marginTop_20__", when size is 20 and type is "marginTop"', () => {
        const result = generateSpaceList({ size: 20, type: 'marginTop' });
        expect(result.some((member) => member.includes('Space_space_marginTop_20__'))).to.be.eq(true);
      });
      it('should return style begin with "Space_space_marginBottom_40__", when size is 40 and type is "marginBottom"', () => {
        const result = generateSpaceList({ size: 40, type: 'marginBottom' });
        expect(result.some((member) => member.includes('Space_space_marginBottom_40__'))).to.be.eq(true);
      });
      it('should return style begin with "Space_space_marginBlock_80__", when size is 80 and type is "marginBlock"', () => {
        const result = generateSpaceList({ size: 80, type: 'marginBlock' });
        expect(result.some((member) => member.includes('Space_space_marginBlock_80__'))).to.be.eq(true);
      });
    });
    describe('With multiple sizes', () => {
      it(`should return style begin with "Space_space_mobile_marginInline_1__", 
          "Space_space_tablet_marginInline_2__", "Space_space_laptop_marginInline_3__", 
          when size is [1,2,3] and type is "marginInline"`, () => {
        const result = generateSpaceList({ size: [1, 2, 3], type: 'marginInline' });

        expect(result.some((member) => member.includes('Space_space_marginInline_mobile_1__'))).to.be.eq(true);
        expect(result.some((member) => member.includes('Space_space_marginInline_tablet_2__'))).to.be.eq(true);
        expect(result.some((member) => member.includes('Space_space_marginInline_laptop_3__'))).to.be.eq(true);
      });

      it(`should return style begin with "Space_space_mobile_marginLeft_4__", 
          "Space_space_tablet_marginLeft_4__", "Space_space_laptop_marginLeft_6__", 
          when size is [4,,6] and type is "marginLeft"`, () => {
        const result = generateSpaceList({ size: [4, undefined, 6], type: 'marginLeft' });

        expect(result.some((member) => member.includes('Space_space_marginLeft_mobile_4__'))).to.be.eq(true);
        expect(result.some((member) => member.includes('Space_space_marginLeft_tablet_4__'))).to.be.eq(true);
        expect(result.some((member) => member.includes('Space_space_marginLeft_laptop_6__'))).to.be.eq(true);
      });

      it(`should return style begin with "Space_space_mobile_marginRight_8__", 
          "Space_space_tablet_marginRight_10__", "Space_space_laptop_marginRight_10__", 
          when size is [8,10] and type is "marginRight"`, () => {
        const result = generateSpaceList({ size: [8, 10], type: 'marginRight' });

        expect(result.some((member) => member.includes('Space_space_marginRight_mobile_8__'))).to.be.eq(true);
        expect(result.some((member) => member.includes('Space_space_marginRight_tablet_10__'))).to.be.eq(true);
        expect(result.some((member) => member.includes('Space_space_marginRight_laptop_10__'))).to.be.eq(true);
      });
    });
  });
  describe('unit test on generateSpaceListBaseOnCommonInterface', () => {
    it('padding', () => {
      const result = generateSpaceListBaseOnCommonInterface({ paddingInline: 1, paddingBlock:[1,2,3] });
      expect(result.some((member) => member.includes('Space_space_paddingInline_1__'))).to.be.eq(true);
      expect(result.some((member) => member.includes('Space_space_paddingBlock_mobile_1__'))).to.be.eq(true);
      expect(result.some((member) => member.includes('Space_space_paddingBlock_tablet_2__'))).to.be.eq(true);
      expect(result.some((member) => member.includes('Space_space_paddingBlock_laptop_3__'))).to.be.eq(true);
    });
    it('margin', () => {
      const result = generateSpaceListBaseOnCommonInterface({ marginLeft: 1, marginRight:[1,2,3] });
      expect(result.some((member) => member.includes('Space_space_marginLeft_1__'))).to.be.eq(true);
      expect(result.some((member) => member.includes('Space_space_marginRight_mobile_1__'))).to.be.eq(true);
      expect(result.some((member) => member.includes('Space_space_marginRight_tablet_2__'))).to.be.eq(true);
      expect(result.some((member) => member.includes('Space_space_marginRight_laptop_3__'))).to.be.eq(true);
    });
    it('height and width', () => {
      const result = generateSpaceListBaseOnCommonInterface({ height: 1, width:[1,2,3] });
      expect(result.some((member) => member.includes('Space_space_height_1__'))).to.be.eq(true);
      expect(result.some((member) => member.includes('Space_space_width_mobile_1__'))).to.be.eq(true);
      expect(result.some((member) => member.includes('Space_space_width_tablet_2__'))).to.be.eq(true);
      expect(result.some((member) => member.includes('Space_space_width_laptop_3__'))).to.be.eq(true);
    });
  });
});
