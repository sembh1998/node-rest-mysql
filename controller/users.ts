import { type Request, type Response } from 'express'
import User from '../models/user'
import { v4 as uuidv4 } from 'uuid'

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await User.findAll()

  res.json({
    users
  })
}

export const getUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params

  const user = await User.findByPk(id)

  res.json({
    user
  })
}

export const postUser = async (req: Request, res: Response): Promise<Response> => {
  const { body } = req

  const newUser = User.build(body)
  const newuuid = uuidv4()
  newUser.setDataValue('id', newuuid)
  newUser.setAttributes('createdAt', new Date())
  newUser.setAttributes('updatedAt', new Date())
  newUser.setDataValue('state', true)
  try {
    const existEmail = await User.findOne({
      where: {
        email: body.email
      }
    })
    if (existEmail != null) {
      return res.status(400).json({
        message: 'Email already exists'
      })
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Error'
    })
  }
  await newUser.save()
  return res.status(201).json({
    newUser
  })
}

export const putUser = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params
  const { body } = req

  try {
    const existUser = await User.findByPk(id)
    if (existUser == null) {
      return res.status(400).json({
        message: 'User with id ' + id + ' does not exist'
      })
    }
    existUser.setAttributes('createdAt', existUser.getDataValue('createdAt'))
    existUser.setAttributes('updatedAt', new Date())
    existUser.setDataValue('state', true)
    await existUser.update(body)

    return res.json({
      existUser
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Error'
    })
  }
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params
  try {
    const existUser = await User.findByPk(id)
    if (existUser == null) {
      return res.status(400).json({
        message: 'User with id ' + id + ' does not exist'
      })
    }
    existUser.setAttributes('updatedAt', new Date())
    await existUser.update({ state: false })

    return res.json({
      existUser
    })
  } catch (error) {
    return res.status(500).json({
      message: String(error)
    })
  }
}
