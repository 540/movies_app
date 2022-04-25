import { Row, Text } from 'ui/_components'
import { Tab } from 'ui/Home/Home.controller'

interface Props {
  tabs: Tab[]
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}

export const TabBar = ({ tabs, activeTab, onTabChange }: Props) => (
  <Row gap="extrahuge" marginTop="large">
    {tabs.map(tab => (
      <Text
        key={tab}
        size="large"
        as="div"
        color={tab === activeTab ? 'accent' : 'white'}
        onClick={() => onTabChange(tab)}
      >
        {tab}
      </Text>
    ))}
  </Row>
)
