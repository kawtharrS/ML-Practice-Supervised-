# Titanic Project

Predict survival on the Titanic using classical ML models (Logistic Regression, Random Forest, XGBoost). This repository contains a Jupyter Notebook (titanic_project.ipynb) with EDA, preprocessing, model training, cross-validation, and hyperparameter tuning.

## Contents
- titanic_project.ipynb — main notebook (EDA → preprocessing → modeling → tuning)
- train.csv, test.csv — input datasets (expected in the same folder)

## Key steps implemented
- Data cleaning (Age/Fare/Embarked imputation)
- Feature engineering (FamilySize, isALone, AgeGroup)
- Label encoding for categorical features
- Model training: Logistic Regression, Random Forest, XGBoost
- Cross-validation and GridSearchCV for hyperparameter tuning
- Basic evaluation (accuracy, classification report, confusion matrix)
