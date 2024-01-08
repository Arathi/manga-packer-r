import React from 'react';
import { ArcStatus } from './types';
import './ProgressBar.scss';

interface Props {
  min?: number;
  max?: number;
  value?: number;
  width?: number;
  height?: number;
  color?: string;
  status?: ArcStatus;
}

const DefaultHeight = 24;

const ProgressBar: React.FC<Props> = ({
  min = 0,
  max = 100,
  value = 0,
  width,
  height = DefaultHeight,
  color,
  status,
}: Props) => {
  const delta = max - min;
  const actual = value - min;
  const progress = actual / delta;
  const percent = `${(progress*100).toFixed(2)}%`;
  const formatted = `${value}/${max} (${percent})`;

  // 计算高度
  let heightScale = 1;
  const style: React.CSSProperties = {};
  if (width != undefined && width > 0) {
    style.width = `${width}px`;
  }
  if (height != undefined && height > 0) {
    style.height = `${height}px`;
    heightScale = height / DefaultHeight;
  }
  const containerStyle: React.CSSProperties = {
    height: `${DefaultHeight * heightScale}px`,
  };
  const barLayerStyle: React.CSSProperties = {};
  const clipStyle: React.CSSProperties = {
    clipPath: `inset(0 round ${DefaultHeight * 0.5 * heightScale}px)`,
  };
  const textLayerStyle: React.CSSProperties = {
    fontSize: `${heightScale}em`,
  };

  // 生成状态
  let barStatus = status;
  if (barStatus == undefined) {
    barStatus = ArcStatus.Primary;
    if (progress >= 1) {
      barStatus = ArcStatus.Success;
    }
  }

  // 进度条颜色
  const barClasses: string[] = ['progress-bar'];
  const barStyle: React.CSSProperties = {
    width: percent,
  };
  if (color != undefined) {
    barStyle.backgroundColor = color;
  }
  else {
    barClasses.push(`bar-color-${barStatus}`);
  }

  return (
    <div className='arc-progress-bar' style={style}>
      <div className='progress-bar-container' style={containerStyle}>
        <div className='progress-bar-layer' style={barLayerStyle}>
          <div className='progress-bar-clip' style={clipStyle}>
            <div className={barClasses.join(' ')} style={barStyle}></div>
          </div>
        </div>
        <div className='progress-text-layer' style={textLayerStyle}>
          <span>{formatted}</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
