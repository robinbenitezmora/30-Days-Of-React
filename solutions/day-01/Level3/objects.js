 const personAccount = {
  firstName: 'John',
  lastName: 'Doe',
  incomes: [1200, 1250, 1700],
  expenses: [320, 850, 140, 82, 230],
  totalIncome: function () {
    return this.incomes.reduce((acc, income) => acc + income, 0)
  },
  totalExpense: function () {
    return this.expenses.reduce((acc, expense) => acc + expense, 0)
  },
  accountInfo: function () {
    return `${this.firstName} ${this.lastName} has a balance of $${this.totalIncome() - this.totalExpense()}`
  },
  addIncome: function (income) {
    this.incomes.push(income)
  },
  addExpense: function (expense) {
    this.expenses.push(expense)
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense()
  }
}

const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]

const signUp = (users, newUser) => {
  const isUserExist = users.some(user => user.email === newUser.email)
  if (isUserExist) {
    return 'User already exist'
  }
  users.push(newUser)
  return users
}

const signIn = (users, email, password) => {
  const isUserExist = users.some(user => user.email === email && user.password === password)
  if (isUserExist) {
    return 'Login successful'
  }
  return 'Login failed'
}

const rateProduct = (products, userId, productId, rate) => {
  const product = products.find(product => product._id === productId)
  if (!product) {
    return 'Product not found'
  }
  const rating = product.ratings.find(rating => rating.userId === userId)
  if (rating) {
    rating.rate = rate
  } else {
    product.ratings.push({ userId, rate })
  }
  return products
}

const averageRating = (products, productId) => {
  const product = products.find(product => product._id === productId)
  if (!product) {
    return 'Product not found'
  }
  const average = product.ratings.reduce((acc, rating) => acc + rating.rate, 0) / product.ratings.length
  return average
}

const likeProduct = (products, userId, productId) => {
  const product = products.find(product => product._id === productId)
  if (!product) {
    return 'Product not found'
  }
  const isLiked = product.likes.includes(userId)
  if (isLiked) {
    return 'Product already liked'
  }
  product.likes.push(userId)
  return products
}

const mostLikedProduct = products => {
  const mostLikedProduct = products.reduce((acc, product) => {
    if (product.likes.length > acc.likes.length) {
      return product
    }
    return acc
  })
  return mostLikedProduct
}
