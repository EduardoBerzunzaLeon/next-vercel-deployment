import { FC, ReactElement } from 'react';

interface  Props {
  children: ReactElement | ReactElement[]
}

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding: '10px',
    }}>
        <h3>Dark-Layout</h3>
        <div>
            { children }
        </div>
    </div>
  )
}

export default DarkLayout