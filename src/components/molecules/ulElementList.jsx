import sUl from '../../assets/styles/molecules/ulElementList.module.css'

import LinkHref from 'components/atoms/linkHref'

import PropTypes from 'prop-types'

const UlElementList = (props) => {
    const { items } = props
    return (
        <ul className={sUl.ulContainer}>
            {items.map((content, index) => (
                <li className={sUl.li} key={index}>
                    <LinkHref text={content.text} link={content.link} size={content.size}/>
                </li>
            ))}
        </ul>
    )
}

UlElementList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
        })
      ).isRequired,
  };

export default UlElementList;