# restapi_courses

## Слушатель (Users)

user {
id
firstName
secondName
lastName
login
password
userDataId
coursesId
}

## Данные пользователя (usersData)

userData {
id
userId
birthday
monthOfBirth
yearOfBirth
telephone
email
education
qualification
educationDocument
seriesOfDocument
documentNumber
placeOfWork {
position
subject
area
locality
educationalInstitution
nameOfInstitution
}
}

## Категории курсов (courseCategories)

courseCategorie {
id
name
coursesId
}

## Курсы (courses)

course {
id
name
startDate
endDate
numberOfHourse
quarterOfTheYear
formOfTraining
numberOfListeners
usersId
supervisorId
}

## Руководитель курса (supervisors)

supervisor {
id
firstName
secondName
lastName
}

## Образование

education {
id
name
}

## Документ об образовании

educationDocument {
id
name
}

## Район

## Населенный пункт

## Образовательные организации

## Наименование учреждения

## Занимаемая должность

positions {
id
name
}

## Предметы

subjects {
id
name
}
