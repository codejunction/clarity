import { CdsProgressCircle as ProgressCircle } from '@cds/core/progress-circle';
import '@cds/core/progress-circle/register';
import { createComponent } from '../converter/react-wrapper';

export const CdsProgressCircle = createComponent('cds-progress-circle', ProgressCircle);
