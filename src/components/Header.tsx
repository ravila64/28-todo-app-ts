import { type TodoTitle } from "../types/Todo"
import { CreateTodo } from "./CreateTodo"

interface Props{
    onAddTodo:({title}:TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
    return (
        <header className="header">
            <h1>todo
                <img 
                style={{width:'60px', height:'auto'}}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAYFBMVEUxeMb///8sdsU8fslFgsrK2e4AZb/n7fcjcsQ5fMgbcMPU3/AAasEzesfg6PS/0Orw9fqHqtl8otZmldFaj85QiMyYtd5wm9P5+v3a5POxxuUAYr+Pr9uguuClv+LE1OsyLZSWAAAEnklEQVR4nO2d2ZajIBBAsdxKxOCaqJOO//+Xo+k1ihoIER64TzOntb3NJmtJvB9OvKgTYpykLvjp14p8/yMsgVEwbTcBlEEZzgTzCtEKu08Ascr/CvKEmnaaQxP+KzjYkbePAB2+BbmNfpMh/xTMEyv9RsMkvwtW1pW/b2g1CYZo2mMdDEfB0mbB0iMnsLQETgCcCGemLbZgnBTWVpEJWpDa4hwe87gmFvRftrBcz+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDh+AQBE+gMivrhJEBQR/zLKSFOVxUfPJ/rbuSirOhiF1QUDXwnBzjCgUXDmadx6D7R5F/YlRGr7kSHz1Oiy2fMQm3O+fn3bXQMVQ3VB8vA4YBe+e4tKYdQkSEnY7t6SElOCQM/7egYFAfunbjElCEn63C2mBGm4f7VJQfpc/hoTxPLpW8wIRhuNsw2C9EP84zw+jcTxX30TgpDFop/ditpHxigJquJj+JZUE0zyeMnsga3gkvD+NCyXLXR8ySh+dnfuPS/wq75VFiQQLfiHs0cOy2sidn+YoInuo/khOUBGr6mq4JIMgtkzw9W/jizaaPEpL6CkzDtNgkQguPKb70enHsjXjrCMyVjoOgEmITi/0us3zthoOx8pIdjMBQ85Y/O8INZzwatdgrAQ5JFVgrjIYi874KTcK5XE4wccFZYQ9Jcvkv79x10lBLNuIejx4N0V5XlBAqLeal5G7y2IEoK0EAiO3ZkLvlNRJgUDUXdrZLgs+gxGBAlbHZHEpf+u6iIjCLg+ZM/PDXuLoowgoedVwVGRB+9QlBIkuD1pFNb6y6KcICQr9eSLdtCeinKCBNdq8o/iTfMLWlJw7DII3icPnPRGK5AVJJjtTR+1Z51NjrTgOCa67k0w9BoDAsgLEmDVXiL2+sqhguCYzeyyk4hb46kDBMcmG67blUXbeEVRcIojs5nRua6oBcqC45s5avr1VnHQlITqgtPNrLmuKiot5WgWvK/XXVZyOtRTT14UHEFanESCua8lCV8XnKr0TSDY6okvo0NwaroFRfFDSzXRIjgmomDQzO1JQTL1chbvlnC+iGtUULAE0GmZw9QmCME8kzst1VhmXLxZprJ/8zw+WhD8y9Z4I4vmreHxgh7fSkQ2T8GjK8k0y59Wq4mI1bwM8oPfJJ/LEP3KHAfgYiX5dnBD/bVO0t4atsxoYMshfXFwQ/2zkJMPVcTwdz8SALJguRKfN0ay+IuhqJoEKWOMol+Xoh5XqmcNQH0pLE6H+56tsBMPoC56RnavrNVtcjq8yy8n2GpKwLcJ8uOHnVKCp8jAaqeEYKyniXmbYOebmJt5XnDQGe3ytbU6EeNoTucssEyHteL7aRjfqLkpYGTVzpxWel2fRFeM4QjBbLMP37waKZT8lC8zu83joQC6mruJepBOP/mLaEvyI8jYtAnqxoe0m0jTob9dywa34nRDrR7m9KlN3bNbpt3nSLLPTdbZ9N+dLei0MBEoVuJPYtz+ULvWByu2P9yz9QGz7Q85bn3QdvvD3k8fDrCupjx8OGAshxe7P73gWf/xigk7P//xH66iPp+mszkKAAAAAElFTkSuQmCC"
                />
            </h1>
            <CreateTodo saveTodo={onAddTodo} />
        </header>
    )
}