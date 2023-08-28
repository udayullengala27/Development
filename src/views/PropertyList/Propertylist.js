// ** React Imports
import { useRef, useState } from 'react'

// ** Custom Components
import Wizard from '@components/wizard/index.js'

// ** Steps
import Done from './steps/Done'
import SelectCustomerGap from './steps/SelectCustomer'
import Setabudget from './steps/Setabudget'
import Review from './steps/Review'

// ** Icons Imports
import { FileText, User, MapPin, Link } from 'react-feather'

const WizardModernVertical = () => {
  // ** Ref
  const ref = useRef(null)

  // ** State
  const [stepper, setStepper] = useState(null)

  const steps = [
    {
      id: 'set-a-budget',
      title: 'Set a budget',
      subtitle: '& customise how you spend it.',
      icon: <FileText size={18} />,
      content: <Setabudget stepper={stepper} type='modern-vertical' />
    },
    {
      id: 'select-customer-group',
      title: 'Select Customer Group',
      subtitle: 'to assign this read to',
      icon: <User size={18} />,
      content: <SelectCustomerGap stepper={stepper} type='modern-vertical' />
    },
    {
      id: 'review',
      title: 'Review',
      subtitle: 'your reward rules',
      icon: <MapPin size={18} />,
      content: <Review stepper={stepper} type='modern-vertical' />
    },
    {
      id: 'done',
      title: 'Done!',
      subtitle: 'Not happy? Go back & change',
      icon: <Link size={18} />,
      content: <Done stepper={stepper} type='modern-vertical' />
    }
  ]

  return (
    <div className='modern-vertical-wizard'>
      <Wizard
        type='modern-vertical'
        ref={ref}
        steps={steps}
        options={{
          linear: false
        }}
        instance={el => setStepper(el)}
      />
    </div>
  )
}

export default WizardModernVertical
