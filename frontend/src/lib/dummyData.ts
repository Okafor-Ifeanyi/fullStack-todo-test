export type Header = {
    name: string
    date: string
    amount: string
    status: string
    action: string
  }
  
  export type DashboardEntry = {
    date: string
    method: string
    credit: string
    debit: string
    remark: string
   
  }
  
  export const DashboardTH = [
    { key: 'serial', label: 'S/N', width: '50px' },
    { key: 'date', label: 'Date', width: '100px' },
    { key: 'method', label: 'Method', width: '200px' },
    { key: 'credit', label: 'Credit', width: '200px' },
    { key: 'debit', label: 'Debit', width: '100px' },
    { key: 'remark', label: 'Remark', width: '300px' },
  ]
  
  export const DashboardData = [
    {
      date: '2025/04/25',
      method: 'cash',
      credit: '$1,200.00',
      debit: '$0',
      remark: 'Completed',
    },
    {
        date: '2025/04/25',
        method: 'transfer',
        credit: '$1,900.00',
        debit: '$0',
        remark: 'Completed',
    },
    {
        date: '2025/04/25',
        method: 'cheque',
        credit: '$4,000.00',
        debit: '$0',
        remark: 'Completed',
    },
  ]
  
  export const BarChartData = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
    },
  ]
  
  export const countries = [
    { code: 'US', name: 'United States' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'CA', name: 'Canada' },
    { code: 'AU', name: 'Australia' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
    { code: 'IN', name: 'India' },
    { code: 'BR', name: 'Brazil' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'JP', name: 'Japan' },
    { code: 'CN', name: 'China' },
    { code: 'KE', name: 'Kenya' },
    { code: 'GH', name: 'Ghana' },
    { code: 'EG', name: 'Egypt' },
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'RU', name: 'Russia' },
    { code: 'MX', name: 'Mexico' },
    { code: 'ES', name: 'Spain' },
    { code: 'IT', name: 'Italy' },
    // ...you can add the rest here
  ];