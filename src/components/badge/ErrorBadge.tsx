import { S3 } from '../../environments/urls';
import { Tooltip } from '../../ui/tooltip/Tooltip';

type ErrorBadgeProps = {
  errorText?: string;
};

export const errorText = ({ location, desc }: { location: string; desc: string }) => {
  return `Error In ${location}: ${desc}`;
};

export const ErrorBadge = ({ errorText }: ErrorBadgeProps) => {
  return (
    <>
      <Tooltip id={'error'}>
        <span>에러</span>
        <p hidden={!errorText}>{errorText}</p>
      </Tooltip>
      <div
        data-tooltip-id={'error'}
        style={{
          width: '32px',
          height: '32px',
          cursor: 'not-allowed',
        }}>
        <img
          src={`${S3}/assets/small_poro.png`}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
    </>
  );
};
