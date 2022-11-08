import { generateFontSizeList, generateFontWeightList } from './Font';

describe('styles/Font/Font.cy.ts', () => {
  describe('unit test on generateFontSizeList', () => {
    describe('With a single size', () => {
      it('should return style begin with "Font_text_size_xSmall__", when size is xSmall', () => {
        const [result] = generateFontSizeList('xSmall');
        expect(result.startsWith('Font_text_size_xSmall__')).to.be.equal(true);
      });
      it('should return style begin with "Font_text_size_small__", when size is small', () => {
        const [result] = generateFontSizeList('small');
        expect(result.startsWith('Font_text_size_small__')).to.be.equal(true);
      });
      it('should return style begin with "Font_text_size_medium__", when size is medium', () => {
        const [result] = generateFontSizeList('medium');
        expect(result.startsWith('Font_text_size_medium__')).to.be.equal(true);
      });
      it('should return style begin with "Font_text_size_large__", when size is large', () => {
        const [result] = generateFontSizeList('large');
        expect(result.startsWith('Font_text_size_large__')).to.be.equal(true);
      });

      it('should return style begin with "Font_text_size_xLarge__", when size is xLarge', () => {
        const [result] = generateFontSizeList('xLarge');
        expect(result.startsWith('Font_text_size_xLarge__')).to.be.equal(true);
      });

      it('should return style begin with "Font_text_size_xxLarge__", when size is xxLarge', () => {
        const [result] = generateFontSizeList('xxLarge');
        expect(result.startsWith('Font_text_size_xxLarge__')).to.be.equal(true);
      });
    });
    describe('With a multiple size', () => {
      it('should return style begin with "Font_text_size_mobile_xSmall__", "Font_text_size_tablet_small__", "Font_text_size_laptop_medium__", when size is [xSmall, small, medium]', () => {
        const [mobile, tablet, laptop] = generateFontSizeList(['xSmall', 'small', 'medium']);

        expect(mobile.startsWith('Font_text_size_mobile_xSmall__')).to.be.equal(true);
        expect(tablet.startsWith('Font_text_size_tablet_small__')).to.be.equal(true);
        expect(laptop.startsWith('Font_text_size_laptop_medium__')).to.be.equal(true);
      });
      it('should return style begin with "Font_text_size_mobile_xSmall__", "Font_text_size_tablet_xSmall__", "Font_text_size_laptop_medium__", when size is [xSmall, , medium]', () => {
        const [mobile, tablet, laptop] = generateFontSizeList(['xSmall', , 'medium']);

        expect(mobile.startsWith('Font_text_size_mobile_xSmall__')).to.be.equal(true);
        expect(tablet.startsWith('Font_text_size_tablet_xSmall__')).to.be.equal(true);
        expect(laptop.startsWith('Font_text_size_laptop_medium__')).to.be.equal(true);
      });
      it('should return style begin with "Font_text_size_mobile_xSmall__", "Font_text_size_tablet_medium__", "Font_text_size_laptop_medium__", when size is [xSmall, medium]', () => {
        const [mobile, tablet, laptop] = generateFontSizeList(['xSmall', 'medium']);

        expect(mobile.startsWith('Font_text_size_mobile_xSmall__')).to.be.equal(true);
        expect(tablet.startsWith('Font_text_size_tablet_medium__')).to.be.equal(true);
        expect(laptop.startsWith('Font_text_size_laptop_medium__')).to.be.equal(true);
      });
    });
  });

  describe('unit test on generateFontWeightList', () => {
    describe('With a single weight', () => {
      it('should return style begin with "Font_text_weight_thin__", when weight is thin', () => {
        const [result] = generateFontWeightList('thin');
        expect(result.startsWith('Font_text_weight_thin__')).to.be.equal(true);
      });
      it('should return style begin with "Font_text_weight_normal__", when weight is normal', () => {
        const [result] = generateFontWeightList('normal');
        expect(result.startsWith('Font_text_weight_normal__')).to.be.equal(true);
      });
      it('should return style begin with "Font_text_weight_semiBold__", when weight is semiBold', () => {
        const [result] = generateFontWeightList('semiBold');
        expect(result.startsWith('Font_text_weight_semiBold__')).to.be.equal(true);
      });
      it('should return style begin with "Font_text_weight_bold__", when weight is bold', () => {
        const [result] = generateFontWeightList('bold');
        expect(result.startsWith('Font_text_weight_bold__')).to.be.equal(true);
      });
    });
    describe('With a multiple size', () => {
      it('should return style begin with "Font_text_weight_mobile_thin__", "Font_text_weight_tablet_normal__", "Font_text_weight_laptop_semiBold__", when weight is [thin, normal, semiBold]', () => {
        const [mobile, tablet, laptop] = generateFontWeightList(['thin', 'normal', 'semiBold']);

        expect(mobile.startsWith('Font_text_weight_mobile_thin__')).to.be.equal(true);
        expect(tablet.startsWith('Font_text_weight_tablet_normal__')).to.be.equal(true);
        expect(laptop.startsWith('Font_text_weight_laptop_semiBold__')).to.be.equal(true);
      });
      it('should return style begin with "Font_text_weight_mobile_thin__", "Font_text_weight_tablet_thin__", "Font_text_weight_laptop_semiBold__", when size is [xSmall, , medium]', () => {
        const [mobile, tablet, laptop] = generateFontWeightList(['thin', , 'semiBold']);

        expect(mobile.startsWith('Font_text_weight_mobile_thin__')).to.be.equal(true);
        expect(tablet.startsWith('Font_text_weight_tablet_thin__')).to.be.equal(true);
        expect(laptop.startsWith('Font_text_weight_laptop_semiBold__')).to.be.equal(true);
      });
      it('should return style begin with "Font_text_weight_mobile_thin__", "Font_text_weight_tablet_semiBold__", "Font_text_weight_laptop_semiBold__", when size is [xSmall, medium]', () => {
        const [mobile, tablet, laptop] = generateFontWeightList(['thin', 'semiBold']);

        expect(mobile.startsWith('Font_text_weight_mobile_thin__')).to.be.equal(true);
        expect(tablet.startsWith('Font_text_weight_tablet_semiBold__')).to.be.equal(true);
        expect(laptop.startsWith('Font_text_weight_laptop_semiBold__')).to.be.equal(true);
      });
    });
  });
});
