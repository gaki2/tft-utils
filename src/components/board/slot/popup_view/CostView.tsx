type CostViewProps = {
  championCost: number;
};

export const CostView = ({ championCost }: CostViewProps) => {
  return (
    <div style={{ display: 'flex', gap: '4px', alignItems: 'center', padding: '0px 8px 0px 4px' }}>
      <img style={{ display: 'inline' }} src='https://tft-utils.s3.ap-northeast-2.amazonaws.com/assets/coin.svg' />
      <span style={{ color: '#fff' }}>{championCost}</span>
    </div>
  );
};
