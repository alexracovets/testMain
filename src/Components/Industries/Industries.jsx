import { useState } from 'react';
import PropTypes from 'prop-types';
import { Scrollbar } from 'react-scrollbars-custom';
import IndustriesRow from './IndustriesRow/IndustriesRow';

const row1 = [
    {
        name: 'Finance',
        row: 0,
        text: "The banks of today strive for a comprehensive set of online and mobile banking services. This includes payments, transfers, account management, investment, lending and other services. Banks replace manual operations with modern, intuitive and easy-to-navigate digital interfaces, and invest in UX/UI design to make their platforms user-friendly and enjoyable. Banks seek to better understand customer behaviour and identify opportunities to improve their products and services.",
        idx: 0
    },
    {
        name: 'Healthcare',
        row: 0,
        text: "Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets, Capital Markets,",
        idx: 1
    },
    {
        name: 'Government',
        row: 0,
        text: "Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance, Finance",
        idx: 2
    }
]
const row2 = [

    {
        name: 'Manufacturing',
        row: 1,
        text: "Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail, Specialty Retail",
        idx: 3
    },
    {
        name: 'Education',
        row: 1,
        text: "Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services, Healthcare Services",
        idx: 4
    },
    {
        name: 'Real Estate',
        row: 1,
        text: "Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality, Travel & Hospitality",
        idx: 5
    }
]

const rows = [row1, row2];
import s from './Industries.module.scss';
export default function Industries({ mobile }) {

    const [activeRow, setActiveRow] = useState();

    return (
        <>
            {!mobile ? <Scrollbar className={'scroll'}>
                <div className={s.industries_wrapper}>
                    {rows.map((row, i) => <IndustriesRow key={i} industries={row} idx={i} activeRow={activeRow} setActiveRow={setActiveRow} />)}
                </div>
            </Scrollbar > :
                <div className={s.industries_wrapper}>
                    {rows.map((row, i) => <IndustriesRow key={i} industries={row} idx={i} activeRow={activeRow} setActiveRow={setActiveRow} />)}
                </div>
            }
        </>

    );
}

Industries.propTypes = {
    mobile: PropTypes.bool
}