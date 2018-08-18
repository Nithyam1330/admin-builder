import { PersonalInfo } from '../create-student/personal-info/personal-info.model';
import { EducationalInfo } from '../create-student/educational-details/educational-details.model';
import { ConfirmationInfo } from '../create-student/confirmation-status/confirmation-status.model';

export class StudenList {
    personalInfo: PersonalInfo;
    educationalInfo: EducationalInfo;
    confirmInfo: ConfirmationInfo;
}