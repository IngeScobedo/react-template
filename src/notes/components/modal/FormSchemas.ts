import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const AddNoteFormSchema = Yup.object().shape({
  title: Yup.string().required('El titulo de la nota es requerida'),
  body: Yup.string().required('El cuerpo de la nota es requerido'),
})

export const AddNoteFormOptions = {
  resolver: yupResolver(AddNoteFormSchema),
}
