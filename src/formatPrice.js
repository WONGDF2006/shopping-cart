// 89000 -> "₩89,000"
const formatPrice = (won) => `₩${won.toLocaleString('ko-KR')}`;

export default formatPrice;
