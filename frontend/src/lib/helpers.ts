export const getToken = () => {
    const token = JSON.parse(localStorage.getItem('gbese-auth-token') || '')
    return token
  }
  
  export const getMetaData = () => {
    const metadata = JSON.parse(localStorage.getItem('metadata-user') || '')
    return metadata
  }
  
  export const getCurrentUser = () => {
    const currentUser = JSON.parse(localStorage.getItem('current-user') || '')
    return currentUser
  }
  
  export const convertDate = (dateString: string) => {
    const date = new Date(dateString);
  
    const formatted = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;
  
    return formatted
  }
  
  export const getCurrentUserAccount = (amount: number) => {
    const paginatd_amount = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2,
    }).format(amount)
  
    return paginatd_amount
  }

// Helper to get suffix like "st", "nd", "rd", "th"
export function getDaySuffix(day: number): string {
    if (day > 3 && day < 21) return day + 'th';
    switch (day % 10) {
      case 1: return day + 'st';
      case 2: return day + 'nd';
      case 3: return day + 'rd';
      default: return day + 'th';
    }
  }

export function currencyFormat(amount: string): string {
    const amount_new = new Intl.NumberFormat('en-EU', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
      }).format( parseInt(amount) || 0)
      
    return amount_new
}

export function toTitleCase(name: string) {
  return name
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}