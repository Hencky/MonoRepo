import styles from './index.less';

import fn from 'demo1';
import 'demo3'

fn();

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
